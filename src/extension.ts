import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	var kmap: any;

	let reload = vscode.commands.registerCommand('custom-keymap.reload', () => {
		kmap = vscode.workspace.getConfiguration('custom-keymap').get('keymap');
	});
	context.subscriptions.push(reload);

	// override the default "type" command of the editor
	vscode.commands.registerCommand('type', (args) => {
		const target = kmap[args.text] || args.text;
		vscode.commands.executeCommand('default:type', {text: target});
	}, context.subscriptions);

	vscode.workspace.onDidChangeConfiguration(event => {
		vscode.commands.executeCommand('custom-keymap.reload');
	}, null, context.subscriptions);

	vscode.commands.executeCommand('custom-keymap.reload');
}

// This method is called when your extension is deactivated
export function deactivate() {}
