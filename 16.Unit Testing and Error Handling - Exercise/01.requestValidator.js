function requestValidator(inputObject) {

    const validTypes = ['GET','POST','DELETE','CONNECT'];
    const validVersions = ['HTTP/0.9','HTTP/1.0','HTTP/1.1','HTTP/2.0'];
    const pattern = new RegExp(/[^a-zA-Z0-9.]/, 'g');

    // Method check
    if (inputObject.hasOwnProperty('method')) {
        if (validTypes.includes(inputObject['method']) === false) {
            throw new Error('Invalid request header: Invalid Method');
        }
    } else {
        throw new Error('Invalid request header: Invalid Method');
    }

    // URI Check
    StarURI:
    if (inputObject.hasOwnProperty('uri')) {
        if (inputObject['uri'] === '*') {
            break StarURI;
        } else if (inputObject['uri'].match(pattern) || inputObject['uri'] === '') {
            throw new Error('Invalid request header: Invalid URI');
        }
    } else {
        throw new Error('Invalid request header: Invalid URI');
    }

    // Version check
    if (inputObject.hasOwnProperty('version')) {
        if (validVersions.includes(inputObject['version']) === false) {
            throw new Error('Invalid request header: Invalid Version');
        }
    } else {
        throw new Error('Invalid request header: Invalid Version');
    }

    // Message check
    if (inputObject.hasOwnProperty('message')) {
        const msg = inputObject['message'];
        if (msg.includes('<') || msg.includes('>') || msg.includes('\\') || msg.includes('&') || msg.includes("'") || msg.includes('"')) {
            throw new Error('Invalid request header: Invalid Message');
        }
    } else {
        throw new Error('Invalid request header: Invalid Message');
    }

    return inputObject;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

console.log(requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));