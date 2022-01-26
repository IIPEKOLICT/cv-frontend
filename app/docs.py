class Param:
    def __init__(self, name, param_type, desc=''):
        self.param_type = param_type
        self.desc = desc
        self.name = name

    def __str__(self):
        return f'(name: {self.name}, param_type: {self.param_type} desc: {self.desc})'

class Doc:
    def __init__(self, title, method, path, params):
        self.method = method
        self.params = params
        self.path = path
        self.title = title

    def __str__(self):
        return f'(title: {self.title}, method: {self.method}, path: {self.path}, params: {self.params})'


docs = [
    Doc(
        'Get cvs',
        'GET',
        '/cv',
        []
    ),
    Doc(
        'Get current cv',
        'GET',
        '/cv',
        [Param('id', 'integer', 'cv id')]
    )
]
