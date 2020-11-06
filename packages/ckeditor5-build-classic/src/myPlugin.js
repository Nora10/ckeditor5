import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ImageAdd from './imageAdd';
import MediaAdd from './mediaAdd';

export default class MyPlugin extends Plugin
{
    static get requires()
    {
        return [ImageAdd, MediaAdd]
    }
}