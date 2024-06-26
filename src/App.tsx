import { useState, useEffect } from 'react'
import * as C from './App.styles'
import { Category } from './types/Category';
import { Item } from './types/Item';
import { categories } from './data/categories'
import { items } from './data/items'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() =>{
    setFilteredList(filterListByMonth(list, currentMonth));

  }, [list, currentMonth]);


  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText> Sistema Financeiro </C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea 
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        />

        
        {/* Área de Inserção */}
        
        
        {/* Tabela de Itens */}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;