import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class AddMedia extends Plugin {
    init() {
        console.log( 'InsertImage was initialized' );
    const editor = this.editor;

        editor.ui.componentFactory.add('addMedia', locale => {
            const view = new ButtonView(locale);

            view.set({
                label: 'Insert Media',
                icon: '<svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 20.6345L8.337 18.269C8.13753 17.9862 7.83806 17.8295 7.52695 17.845C7.21584 17.8605 6.92861 18.0466 6.75 18.3483L4 23H17L13.9 15.654C13.7306 15.2532 13.3843 15 13.0055 15C12.6267 15 12.2804 15.2532 12.111 15.654L9 23" stroke="black" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 15.8235V25.8235C20 26.4733 19.5274 27 18.9444 27H2.05556C1.47259 27 1 26.4733 1 25.8235V8.17647C1 7.52672 1.47259 7 2.05556 7H8.91667" stroke="black" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 14C6.32843 14 7 13.3284 7 12.5C7 11.6716 6.32843 11 5.5 11C4.67157 11 4 11.6716 4 12.5C4 13.3284 4.67157 14 5.5 14Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18 13.0002C21.3137 13.0002 24 10.314 24 7.00024C24 3.68654 21.3137 1.00024 18 1.00024C14.6863 1.00024 12 3.68654 12 7.00024C12 10.314 14.6863 13.0002 18 13.0002Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.9996 7.00028H15.0005" stroke="black" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 9.99983V4.00073" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                tooltip: true
            });

            // Callback executed once the image is clicked.
            view.on('execute', (evt) => {
                console.log('click happened');
            });

            return view;
        });
    }
    }