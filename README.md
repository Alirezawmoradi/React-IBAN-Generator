# React-IBAN-Generator

A lightweight and easy-to-use custom hook for converting Account Number to IBAN Code in React applications.

## Installation

You can install the package via npm:

```bash
npm install use-iban-generator
```

## Usage

### Import

Import the `{AccountType, useIBANGenerator}` hook into your component:

```jsx
import {AccountType, useIBANGenerator} from "react-iban-generator";
```

### Use in Component

Use the `useIBANGenerator` hook in your component:

```jsx
    const iban = useIBANGenerator({
        accountNumber: 'account number',
        accountType: AccountType.seporde or AccountType.tashilat,
        bankId: 'Id of your bank',
        countryCode: 'IR'
    });

```

## Parameters

- `accountNumber`: A string representing the account number.
- `accountType`: An enum representing the account type.
- `bankId`: A string representing the bank identifier.
- `countryCode`: A string representing the country code.

## Bank IDs Reference

If you are looking for the ID of a specific bank, you can find it in the list below:

- **آینده (Ayandeh Bank)**
    - ID: "062"

- **اقتصاد نوین (Eghtesad Novin Bank)**
    - ID: "055"

- **کارآفرین (Karafarin Bank)**
    - ID: "053"

- **کشاورزی (Keshavarzi Bank)**
    - ID: "016"

- **مسکن (Maskan Bank)**
    - ID: "014"

- **ملی (Melli Bank)**
    - ID: "017"

- **ملت (Mellat Bank)**
    - ID: "012"

- **پارسیان (Parsian Bank)**
    - ID: "054"

- **پاسارگاد (Pasargad Bank)**
    - ID: "057"

- **پست بانک (Post Bank)**
    - ID: "021"

- **رفاه (Refah Bank)**
    - ID: "013"

- **صادرات (Saderat Bank)**
    - ID: "019"

- **سامان (Saman Bank)**
    - ID: "021"

- **صنعت معدن (Sanat Madan Bank)**
    - ID: "022"

- **سرمایه (Sarmaye Bank)**
    - ID: "058"

- **سپه (Sepah Bank)**
    - ID: "015"


## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

This package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
