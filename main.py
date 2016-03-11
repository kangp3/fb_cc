from flask import Flask 
from flask import render_template
app = Flask(__name__)

@app.route('/')
def index():
  return 'Index Page'

@app.route('/fb_cc/')
def fb_cc():
  return render_template('fb_cc.html')

if __name__ == '__main__':
  app.debug = True
  app.run()

