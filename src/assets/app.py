from flask import Flask, jsonify 
from gtts import gTTS
import json
import os 

app = Flask(__name__)

@app.route('/run_script', methods=['GET'])
def run_script():
    try: 
        with open('db.json', 'r') as file:
            data = json.load(file)

        
        triagem_info = data['triagem'][-1]
        codigo = triagem_info['codigo']
        numero = triagem_info['numero']

        
        text_to_speak = f"Senha: {codigo}, {numero}"
        language = 'pt-br'   
        
        tts = gTTS(text=text_to_speak, lang=language, slow=False)
        tts.save("output.mp3")

        os.system("xdg-open output.mp3")

        return jsonify({'sucess': True})

    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    app.run() 
