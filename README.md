# Tor Detection Tool

![GitHub Stars](https://img.shields.io/github/stars/dehlirious/tor-detector)
![GitHub Issues](https://img.shields.io/github/issues/dehlirious/tor-detector)

Tor Detector is a versatile JavaScript tool that empowers you to detect Tor exit nodes with ease, as well as identify Canvas Fingerprinting Protection.

## Demonstration
- Explore the tool in action with our live demo [here](https://zrr.us/x/detect-tor/).


## Usage

Use the tool to:

- Identify Tor exit nodes using multiple sources.
- Test for Canvas Fingerprinting Protection.
- Check for specific JavaScript behaviors commonly associated with Tor Browser.
- Enjoy a lightweight and efficient JavaScript codebase.

## Functions

The tool includes the following key functions:

- `isTor(ip, data)`: Checks if the provided IP address is listed in the Tor exit nodes data.
- `hasCanvasFingerprintingProtection`: Tests for Canvas Fingerprinting Protection.
- `hasTorJavaScriptBehavior`: Checks for rounded values for inner width, inner height, outer width, outer height, and screen width.

## Adding Additional Sources

Expand the tool's capabilities with more sources for IP retrieval and Tor detection:

1. Open the `tor.js` file in your code editor.
2. Edit the `ipSources` and `torSources` arrays to include your desired sources.
3. Save the changes.

## Contributions

Contributions to this project are welcome! If you have ideas for improvements or additional features, please don't hesitate to fork the repository and create a pull request.

---

Enjoy using the Tor Detection tool! If you have any questions or encounter any issues, please feel free to [open an issue](https://github.com/dehlirious/tor-detector/issues) on GitHub.
