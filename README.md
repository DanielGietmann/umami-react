# React Simple Umami Analytics Loader

The Umami Analytics Loader is a lightweight script that enables you to easily integrate Umami Analytics into your website. Umami is a simple, open-source website analytics tool that provides valuable insights into your website's traffic without compromising privacy.

## Features

- Easy Integration
- Umami Analytics 

## Installation

Install  with npm

```bash
  npm i @danielgietmann/react-umami
```

## Usage/Examples
In the Main Layout File
Replace GTag with your GTag ID and GAnalytics with your Analytics Id

```javascript
import {UmamiAnalytics} from "@danielgietmann/react-umami";

function App() {
  return (
      <html lang="en">
            <body>
                <UmamiAnalytics
                    UmamiUrl="www.youranalytics.de"
                    UmamiId="123131-231312-132123-12313"
                />
                {children}
            </body>
        </html>

  )
}
```

## Roadmap

- More Config Options

- Cookies Check (DSGVO)


## License

[MIT](https://choosealicense.com/licenses/mit/)
