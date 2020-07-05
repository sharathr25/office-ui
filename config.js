const config = {
    'development': {
        API_URL: 'http://localhost:3001'
    },
    'production': {
        API_URL: 'https://office-server.herokuapp.com'
    },
    'test': {
        API_URL: 'http://localhost:3001'
    }
}

export default config[process.env.NODE_ENV || 'development']