import React, { useState, useRef } from 'react';


export function TextEditor() {
    function saveData() {
        console.log( 'Saved.' );
    }
    window.saveData = saveData;

        return 'saveContent called';
}
