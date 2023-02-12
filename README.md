# React Country Selector

![Framer Motion Animated Counter](https://img.shields.io/github/stars/driaug/react-country-selector?style=social)
![Framer Motion Animated Counter](https://img.shields.io/github/forks/driaug/react-country-selector?style=social)
![Framer Motion Animated Counter](https://img.shields.io/github/sponsors/driaug?style=social)

![An image of the selector](https://i.postimg.cc/x8JyysGx/image.png)

## Requirements
This project makes use of a few dependencies!
- [Tailwind](https://tailwindcss.com/)
- [Tailwind-scrollbar](https://www.npmjs.com/package/tailwind-scrollbar)
- [Framer Motion](https://www.framer.com/motion/)

## Usage
After installing the dependencies. Copy the selector, countries and types to your own project

### State variables
You will need two state variables
- One to store if the selector is open or not
- One for the selected value

### Everything together
```tsx
import { COUNTRIES } from './countries';
import { CountrySelector } from './selector';

const myPage = () => {
  const myRef = React.createRef<HTMLDivElement>();

  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState('AF');

  return (
    <CountrySelector
      id={'countries'}
      open={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      onChange={val => setCountry(val)}
      // We use this type assertion because we are always sure this find will return a value but need to let TS know since it could technically return null
      selectedValue={COUNTRIES.find(option => option.value === country) as SelectMenuOption} 
    />
  );
}
```

## FAQ
### Why is this not installable with npm or yarn?
I decided to create my own selector because I needed flexibility. While the installable components may offer you a selector, most likely you can not style it or decide which countries to show.

By offering you all components you are able to make this selector your own. Prefer to use HeadlessUI over Framer Motion? No problem, you can easily refactor it to suit your needs. :)

### Can I add or remove countries?
Yes! The menu is filled with all countries specified in `countries.ts`. If you add or remove options, they will be removed from the selector as well.
