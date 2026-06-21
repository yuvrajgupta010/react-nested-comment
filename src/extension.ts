// Entry point for the JSX Safe Commenting extension.
//
// Step (a): this is an intentionally empty placeholder so the project compiles.
// The command registration, Ctrl+/ keybinding wiring, and swapChar config are
// added in step (c). The pure transform lives separately in src/toggle.ts (step b)
// so it can be unit-tested without the VS Code API.

import * as vscode from "vscode";

export function activate(_context: vscode.ExtensionContext): void {
  // No-op for now. Filled in during step (c).
}

export function deactivate(): void {
  // Nothing to clean up.
}
