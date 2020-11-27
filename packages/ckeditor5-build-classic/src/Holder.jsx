import React, {useEffect} from 'react';
import { TextEditor } from './TextEditor';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from './ckeditor';


export default function Holder() {
    useEffect(()=> {

    }, []);

    const functionToPassToA = () => {
        return 'hello'
    }

    return (
        <div>
            <ClassicEditor>
                <CKEditor
                    editor={ClassicEditor}
                    config={{
                        extraPlugins: [ ]
                    }}
                />
                <FunctionToClick handleclick='' />
            </ClassicEditor>
        </div>
    )
}
