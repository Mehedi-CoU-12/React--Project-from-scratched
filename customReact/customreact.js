function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerText=reactElement.children;

    for(const prop in reactElement.props){
        if(prop==='children')
            continue

        domElement.setAttribute(prop,reactElement.props[prop]);
    }

    container.append(domElement);
}


const mainContainer = document.getElementById('root');

const reactElement={
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    children:'Click me to visit google'
}


customRender(reactElement,mainContainer);
