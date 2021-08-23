# react-country-selector
![An image of the selector](https://i.postimg.cc/KYwGPws3/image.png)

## Requirements
This project makes use of a few dependencies!
- [Tailwind](https://tailwindcss.com/)
- [Tailwind-scrollbar](https://www.npmjs.com/package/tailwind-scrollbar)
- [Framer Motion](https://www.framer.com/motion/)

## Using it
After you have placed the component, types and list of countries in their desired location (and fixed the imports 😉).
You will need to pass down a few props!
### Forwardref
As you can see, this component makes use of a forwardref, we use this to close the element when someone clicks outside of the selector.
Create a new ref for your selector like this 
```ts
const myRef = React.createRef<HTMLDivElement>();
```
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
      ref={myRef}
      open={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      onChange={val => setCountry(val)}
      // We use this type assertion because we are always sure this find will return a value but need to let TS know since it could technically return null
      selectedValue={COUNTRIES.find(option => option.value === country) as SelectMenuOption} 
    />
  );
}


```
