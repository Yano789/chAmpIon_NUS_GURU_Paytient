# Chatbot and Medical Summarizer

This project is a full-stack application consisting of a chatbot and a medical summarizer. It includes a React frontend and an Express backend that communicates with OpenRouter AI for chatbot responses and medical report generation. Additionally, it includes a Python script for audio transcription using Deepgram.

## Features
- **Audio Transcription:** Uses Deepgram to transcribe audio files into text for summarization.
- **Medical Summarizer:** Converts doctor-patient conversation transcripts into structured medical reports.
- **Chatbot:** Provides professional medical responses using OpenRouter AI.

## Project Structure
```
chAmpIon_NUS_GURU/
│── chatbot_and_summarizer/
│   ├── frontend/   # React frontend
│   ├── backend/    # Express backend
│── transcribe.py  # Deepgram transcription
│── record_audio.py  # Audio capture
│── .env  # Environment variables
│── README.md
```

## Installation & Setup

### Prerequisites
- Node.js & npm
- Python 3.x
- Deepgram API Key

### Backend Setup
```sh
cd chatbot_and_summarizer/backend
npm install
npm start
```

### Frontend Setup
```sh
cd chatbot_and_summarizer/frontend
npm install
npm start
```

### Running Python Transcription
Ensure you have the required Python libraries:
```sh
pip install deepgram-sdk pyaudio wave python-dotenv
```

#### Record Audio
```sh
python record_audio.py
```

#### Transcribe Audio
```sh
python transcribe.py
```

## Dependencies
### Backend
- express
- cors
- multer
- fs
- node-fetch
- dotenv

### Frontend
- react
- react-router-dom
- react-markdown

### Python Scripts
- deepgram-sdk
- pyaudio
- wave
- python-dotenv

## Troubleshooting
- **Frontend not starting?** Ensure `vite` is installed globally or reinstall dependencies.
- **Backend API errors?** Check if `OPENROUTER_API_KEY` is set in `.env`.
- **Python script not running?** Ensure `pyaudio` is installed and use `pip install` for missing dependencies.
