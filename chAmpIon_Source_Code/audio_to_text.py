import os
from deepgram import DeepgramClient, PrerecordedOptions, FileSource
from dotenv import load_dotenv

load_dotenv()

deepgram_key = os.getenv("DEEPGRAM_KEY")
deepgram_client = DeepgramClient(deepgram_key)


def transcribe_audio(audio_file_path: str) -> str:
    with open(audio_file_path, 'rb') as audio_file:
        payload = {"buffer": audio_file.read()}

        options = PrerecordedOptions(
            model="nova-3",
            smart_format=True,
            diarize=True,
        )

        transcription = deepgram_client.listen.rest.v("1").transcribe_file(
            payload, options
        )

    raw_audio_text = transcription.results.channels[0].alternatives[0].paragraphs.transcript
    return raw_audio_text


if __name__ == "__main__":
    audio_file_name = "videoplayback.m4a" 
    script_dir = os.path.dirname(os.path.abspath(__file__))  
    audio_file_path = os.path.join(script_dir, audio_file_name)  
    transcript = transcribe_audio(audio_file_path)
    print("Transcript:")
    print(transcript)
