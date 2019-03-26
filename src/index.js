async function getComponent() {
    var element = document.createElement('div');
    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

const render = async () => {
    const component = await getComponent()
    document.body.appendChild(component);
}
render()