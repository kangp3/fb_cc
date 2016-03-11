from Flask import flask

@app.route('/')
def index():
  return 'Index Page'

if __name__ == '__main__':
  app.run()