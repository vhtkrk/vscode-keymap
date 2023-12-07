import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {
	var kmap: any;

	let reload = vscode.commands.registerCommand('custom-keymap.reload', () => {
		kmap = vscode.workspace.getConfiguration('custom-keymap').get('keymap');
	});
	context.subscriptions.push(reload);

	let keypress = vscode.commands.registerTextEditorCommand('custom-keymap.keypress', (editor, edit, event) => {
		// make sure there is only one change
		if (event.contentChanges.length !== 1) {
			return;
		}

		// make sure the change is a single keypress
		const change = event.contentChanges[0];
		if (change.text.length !== 1) {
			return;
		}

		// see if change is in our keymap
		const target = kmap[change.text];
		if (target !== undefined) {
			// replace our current edit with the fixed character
			edit.replace(change.range.with(change.range.start, change.range.end.translate(0, 1)), target);
		}
	});
	context.subscriptions.push(keypress);

	vscode.workspace.onDidChangeTextDocument(event => {
		vscode.commands.executeCommand('custom-keymap.keypress', event);
	}, null, context.subscriptions);

	vscode.commands.executeCommand('custom-keymap.reload');
}

// This method is called when your extension is deactivated
export function deactivate() {}
