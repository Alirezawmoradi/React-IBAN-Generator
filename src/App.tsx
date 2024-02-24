import useIBANConverter from "./hooks/useIBANConverter.tsx";
import {AccountType} from "./utils/accountType.ts";

function App() {
    const iban = useIBANConverter({
        accountNumber: '8480771708',
        accountType: AccountType.seporde,
        bankId: '012',
        countryCode: 'IR'
    })
    return (
        <>
            <h4>React IBAN Converter Custom Hook</h4>
            <p>Iban Code is : {iban}</p>
        </>
    )
}

export default App
