# Tor Detection

![GitHub Stars](https://img.shields.io/github/stars/dehlirious/tor-detector)
![GitHub Issues](https://img.shields.io/github/issues/dehlirious/tor-detector)

This JavaScript tool enables you to check for Canvas Fingerprinting Protection and to detect Tor exit nodes.

## Demonstration
- You can test the functionality of this script [here](https://zrr.us/x/detect-tor/) (`https://zrr.us/x/detect-tor/`)
  
## Features

- Detect Tor exit nodes using multiple sources, easily extendable with additional IP and Tor sources.
- Test for Canvas Fingerprinting Protection.
- Check for specific JavaScript behaviors associated with Tor Browser
- Lightweight and efficient JavaScript code.

## Usage

1. Clone this repository to your local machine or download the [zip](https://codeload.github.com/dehlirious/tor-detector/zip/refs/heads/main).
2. Open the `index.html` file in a web browser.
3. The tool will automatically fetch your public IP address and check if it's a Tor exit node.

## Functions
- `isTor(ip, data)` checks if the provided IP address is listed in the Tor exit nodes data
- `hasCanvasFingerprintingProtection` checks for Canvas Fingerprinting Protection by comparing two canvas fingerprints. It returns false if protection is detected and true if not.
- `hasTorJavaScriptBehavior` checks for rounded values for inner width, inner height, outer width, outer height, and screen width.

## Additional Sources

To add more sources for IP grabbing and Tor detection, follow these steps:

1. Open `tor.js` in a code editor.
2. Edit the `ipSources` and `torSources` arrays to include your desired sources.
3. Save the changes.

## Contributions

Contributions to this project are welcome! If you have any improvements or additional features you'd like to add, feel free to fork the repository and create a pull request.

---

Enjoy using the Tor Detection script! If you have any questions or encounter issues, please [open an issue](https://github.com/dehlirious/tor-detector/issues) on GitHub.
