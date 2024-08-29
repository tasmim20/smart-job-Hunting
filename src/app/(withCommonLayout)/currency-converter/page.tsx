"use client";
import { useState } from "react";

type CurrencyRates = {
  [key: string]: { rate: number; name: string };
};

const currencyRates: CurrencyRates = {
  USD: { rate: 0.011, name: "United States Dollar (USD)" },
  EUR: { rate: 0.0093, name: "Euro (EUR)" },
  GBP: { rate: 0.0081, name: "British Pound Sterling (GBP)" },
  INR: { rate: 0.82, name: "Indian Rupee (INR)" },
  AUD: { rate: 0.016, name: "Australian Dollar (AUD)" },
  CAD: { rate: 0.015, name: "Canadian Dollar (CAD)" },
  JPY: { rate: 1.62, name: "Japanese Yen (JPY)" },
  CNY: { rate: 0.078, name: "Chinese Yuan (CNY)" },
  SAR: { rate: 0.041, name: "Saudi Riyal (SAR)" },
  AED: { rate: 0.04, name: "United Arab Emirates Dirham (AED)" },
  CHF: { rate: 0.01, name: "Swiss Franc (CHF)" },
  MYR: { rate: 0.046, name: "Malaysian Ringgit (MYR)" },
  SGD: { rate: 0.015, name: "Singapore Dollar (SGD)" },
  HKD: { rate: 0.086, name: "Hong Kong Dollar (HKD)" },
  THB: { rate: 0.37, name: "Thai Baht (THB)" },
  PKR: { rate: 3.02, name: "Pakistani Rupee (PKR)" },
  BHD: { rate: 0.0041, name: "Bahraini Dinar (BHD)" },
  QAR: { rate: 0.04, name: "Qatari Riyal (QAR)" },
  OMR: { rate: 0.0042, name: "Omani Rial (OMR)" },
  NOK: { rate: 0.1, name: "Norwegian Krone (NOK)" },
  SEK: { rate: 0.1, name: "Swedish Krona (SEK)" },
  DKK: { rate: 0.069, name: "Danish Krone (DKK)" },
  ZAR: { rate: 0.21, name: "South African Rand (ZAR)" },
  TRY: { rate: 0.28, name: "Turkish Lira (TRY)" },
  BND: { rate: 0.015, name: "Brunei Dollar (BND)" },
  NZD: { rate: 0.017, name: "New Zealand Dollar (NZD)" },
  KRW: { rate: 13.0, name: "South Korean Won (KRW)" },
  LKR: { rate: 3.96, name: "Sri Lankan Rupee (LKR)" },
  PHP: { rate: 0.62, name: "Philippine Peso (PHP)" },
  VND: { rate: 269.0, name: "Vietnamese Dong (VND)" },
  IDR: { rate: 157.0, name: "Indonesian Rupiah (IDR)" },
  EGP: { rate: 0.34, name: "Egyptian Pound (EGP)" },
  MXN: { rate: 0.19, name: "Mexican Peso (MXN)" },
  BRL: { rate: 0.056, name: "Brazilian Real (BRL)" },
  RUB: { rate: 1.06, name: "Russian Ruble (RUB)" },
  PLN: { rate: 0.043, name: "Polish Zloty (PLN)" },
  HUF: { rate: 3.38, name: "Hungarian Forint (HUF)" },
  CZK: { rate: 0.23, name: "Czech Koruna (CZK)" },
  ILS: { rate: 0.041, name: "Israeli New Shekel (ILS)" },
  KWD: { rate: 0.0033, name: "Kuwaiti Dinar (KWD)" },
  RON: { rate: 0.046, name: "Romanian Leu (RON)" },
  CLP: { rate: 9.07, name: "Chilean Peso (CLP)" },
  PEN: { rate: 0.041, name: "Peruvian Sol (PEN)" },
  COP: { rate: 44.0, name: "Colombian Peso (COP)" },
  ARS: { rate: 2.9, name: "Argentine Peso (ARS)" },
  UAH: { rate: 0.29, name: "Ukrainian Hryvnia (UAH)" },
  NGN: { rate: 8.41, name: "Nigerian Naira (NGN)" },
};

const CurrencyConverter = () => {
  const [amount, setAmount] = useState<number | string>("");
  const [convertedAmount, setConvertedAmount] = useState<number | string>("");
  const [fromCurrency, setFromCurrency] = useState<string>("BDT");
  const [toCurrency, setToCurrency] = useState<string>("USD");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setAmount(e.target.value);
    convertCurrency(value, fromCurrency, toCurrency);
  };

  const handleFromCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFromCurrency(e.target.value);
    convertCurrency(parseFloat(amount.toString()), e.target.value, toCurrency);
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(e.target.value);
    convertCurrency(
      parseFloat(amount.toString()),
      fromCurrency,
      e.target.value
    );
  };

  const convertCurrency = (
    value: number,
    fromCurrency: string,
    toCurrency: string
  ) => {
    if (fromCurrency === "BDT") {
      setConvertedAmount((value * currencyRates[toCurrency].rate).toFixed(2));
    } else if (toCurrency === "BDT") {
      setConvertedAmount((value / currencyRates[fromCurrency].rate).toFixed(2));
    } else {
      const convertedToBDT = value / currencyRates[fromCurrency].rate;
      setConvertedAmount(
        (convertedToBDT * currencyRates[toCurrency].rate).toFixed(2)
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-5">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
        <h2 className="text-3xl font-bold text-blue-600 mb-5 text-center">
          Currency Converter
        </h2>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Amount:
          </label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            From:
          </label>
          <select
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="BDT">Bangladeshi Taka (BDT)</option>
            {Object.keys(currencyRates).map((currency) => (
              <option key={currency} value={currency}>
                {currencyRates[currency].name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            To:
          </label>
          <select
            value={toCurrency}
            onChange={handleToCurrencyChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="BDT">Bangladeshi Taka (BDT)</option>
            {Object.keys(currencyRates).map((currency) => (
              <option key={currency} value={currency}>
                {currencyRates[currency].name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Converted Amount ({toCurrency}):
          </label>
          <input
            type="number"
            value={convertedAmount}
            readOnly
            className="w-full p-3 border rounded-lg shadow-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Converted amount will appear here"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
