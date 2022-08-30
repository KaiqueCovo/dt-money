import { Header, Summary } from "../../components";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income"> R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>23/04/2022</td>
          </tr>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="outcome">- R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>23/04/2022</td>
          </tr>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
