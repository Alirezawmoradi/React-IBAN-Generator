export type IBANConverterProps = {
    countryCode: string,
    AccountNumber: string;
    BankId: string;
    AccountType: AccountType;
    Dictionary:  Record<string, number>;
}

enum AccountType {
    Seporde,
    Tashilat
}