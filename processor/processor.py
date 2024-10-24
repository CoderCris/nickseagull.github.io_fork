import openai
import sys
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Get the OpenAI API key from the .env file
openai.api_key = os.getenv("OPENAI_API_KEY")

def transcribe_audio(file_path):
    try:
        # Extract the basename without extension
        base_name = os.path.splitext(file_path)[0]
        output_file = f"{base_name}.txt"

        # Open the audio file
        with open(file_path, 'rb') as audio_file:
            # Use the new OpenAI API to transcribe the audio
            transcript = openai.audio.transcriptions.create(model="whisper-1", file=audio_file)

        # Save the transcription result to a .txt file with the same basename
        with open(output_file, "w") as transcript_file:
            transcript_file.write(transcript.text)
        
        print(f"Transcription saved to {output_file}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python transcribe.py <audio_file.mp3>")
    else:
        transcribe_audio(sys.argv[1])

