import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const Map = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
            }
            .map-container {
                width: 100vw;
                height: 100vh;
                position: relative;
            }
            iframe {
                width: 100%;
                height: 100%;
                border: none;
                border-radius: 8px;
            }
        </style>
    </head>
    <body>
        <div class="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.1756537058873!2d86.17827448291301!3d22.795954326045518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e365ceaea52d%3A0x6423fbdd6fbfb1e1!2sInstitution%20Of%20Environment%20Management%20And%20Studies!5e0!3m2!1sen!2sin!4v1742631850390!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Institution Of Environment Management And Studies Location">
            </iframe>
        </div>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        source={{ html: htmlContent }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        originWhitelist={['*']}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: '#aaa',
  },
  webview: {
    flex: 1,
  },
});

export default Map;
