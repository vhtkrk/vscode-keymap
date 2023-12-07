# custom-keymap

## Features

Allows you to remap any key in the VSCode text editor. Only affects the text you type in the text editor.

Personally I use it to make a nordic keyboard layout tolerable for coding with the following settings:

```json
{
    "custom-keymap.keymap": {
        "ö": "[",
        "ä": "]",
        "Ö": "{",
        "Ä": "}",
        "å": "\\",
        "Å": "|",
        "§": "`",
        "°": "~"
    }
}
```

## Extension Settings

This extension contributes the following settings:

* `custom-keymap.keymap`: JSON object of "char1": "char2" pairs. Whenever you type char1 it will be replaced with char2

## Known Issues

- None yet

## TODO

- Publish on VSCode marketplace
