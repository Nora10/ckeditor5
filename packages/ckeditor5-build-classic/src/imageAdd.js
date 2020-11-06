import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import MediaAdd from './mediaAdd';

export default class ImageAdd extends Plugin
{
    init()
    {
        console.log('ImageAdd #init() has been called.');
    }
}