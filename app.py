from flask import Flask, request, jsonify
from flask_cors import CORS # type: ignore
import uuid
import os
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/run', methods=["POST"])
def run_code():
    data = request.get_json()
    code = data.get('code', '')
    
    filename = os.path.join("submittedCode", f"{uuid.uuid4()}.c")
    executable = filename.replace(".c", "")
    
    with open(filename, 'w') as file:
        file.write(code)
    try: 
        compiled_res = subprocess.run(['gcc', filename, '-o', executable], capture_output=True, text=True, timeout=5)
        executed_res = subprocess.run([executable], capture_output=True, text=True, timeout=5)
    except subprocess.TimeoutExpired:
        return jsonify({"output": "EXECUTION SESSION TIMEOUT."})
    finally:
        if os.path.exists(filename):
            os.remove(filename)
        if os.path.exists(executable):
            os.remove(executable)
    return jsonify({"output" : executed_res.stdout})

if __name__ == '__main__':
    app.run(debug=True)