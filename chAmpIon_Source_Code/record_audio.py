import pyaudio
import wave
from datetime import datetime


def capture_audio():
    # Audio settings
    audio = pyaudio.PyAudio()
    audio_format = pyaudio.paInt16  # 16-bit audio
    channels = 1
    rate = 16000
    frames_per_buffer = 1024

    audio_stream = audio.open(
        format=audio_format,
        channels=channels,
        rate=rate,
        input=True,
        frames_per_buffer=frames_per_buffer,
    )

    frames = []

    try:
        print("Recording audio. Press Ctrl+C to stop.")
        while True:
            audio_data = audio_stream.read(
                frames_per_buffer, exception_on_overflow=False
            )
            frames.append(audio_data)
            print("Captured audio packet")

    except KeyboardInterrupt:
        print("Recording stopped.")

    finally:
        audio_stream.stop_stream()
        audio_stream.close()
        audio.terminate()

        ts = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"audio_capture_{ts}.wav"

        with wave.open(filename, 'wb') as wav_file:
            wav_file.setnchannels(channels)
            wav_file.setsampwidth(audio.get_sample_size(audio_format))
            wav_file.setframerate(rate)
            wav_file.writeframes(b''.join(frames))

        print(f"Audio saved as {filename}")


if __name__ == "__main__":
    capture_audio()
