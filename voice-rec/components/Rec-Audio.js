import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity,Image  } from 'react-native';
import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';
export default function App() {
  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");
  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }
  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });
    setRecordings(updatedRecordings);
  }
  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }
  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></TouchableOpacity>
        <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
          <TouchableOpacity style={styles.button} onPress={() => Sharing.shareAsync(recordingLine.file)} title="Share"></TouchableOpacity>
        </View>
      );
    });
  }
  return (
    <View style={styles.container}>
          <View style={styles.top}>
        <Text style={styles.header}>Voice Recoder</Text>
      </View>

      <Image
      source={require('./assets/3425171.jpg')} 
      style={styles.wave}
      />
      {getRecordingLines()}
      <Text>{message}</Text>
      <TouchableOpacity
        style={styles.btn}  
        onPress={recording ? stopRecording : startRecording} >
        <Image
        style={styles.play}
        source={require('./assets/1617.jpg')}
      />
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
    top: {
    height: 100,
    width: 333,
    textAlign: 'center',
    backgroundColor: '#646464',
    marginBottom: 120,
  },
  header: {
    fontSize: 38,
    fontWeight: 'bold',
    marginTop: 15,
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(75,81,159,255)',
    alignItems: 'center',
    justifyContent: 'start',
  },
   row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9'
  },
  fill: {
    flex: 1,
    margin:16,
    backgroundColor: 'white',
  },
  button: {
    margin: 16,
  },

  play: {
    width: 50,
    height: 50,
    borderRadius: 40,
    
  },

  wave: {
    width:350,
    height:200
  }
});