import _ from 'lodash';

function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    button.onclick = async (e) => {
        // the vendor file's content hash changes when i add webpackChunkName
        const module = await import(
            /* webpackPrefetch: true */
            './print')
        var print = module.print;
        print('hello webpack');
    }

    console.log('test')
    return element;
}

document.body.appendChild(component());
