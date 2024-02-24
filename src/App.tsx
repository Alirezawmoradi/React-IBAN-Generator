import useIBANGenerator, {AccountType} from "./hooks/useIBANGenerator.ts";

function App() {
    const iban = useIBANGenerator({
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
