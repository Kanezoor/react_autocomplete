// import { useState } from 'react';
// import { Person } from '../../types/Person';
// import classNames from 'classnames';

// type Props = {
//   people: Person[];
//   delay?: number;
//   onSelected: (person: Person) => void;
// };

// export const Autocomplete: React.FC<Props> = ({
//   people,
//   delay,
//   onSelected,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [query, setQuery] = useState('');

//   const filteredPeople = query
//     ? people.filter(person =>
//         person.name.toLowerCase().includes(query.toLowerCase()),
//       )
//     : people;

//   const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(event.target.value);
//   };

//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const handlerFocus: React.FocusEventHandler<HTMLInputElement> = _ => {
//     setIsOpen(true);
//   };

//   const handlerBlur = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className={classNames('dropdown', { 'is-active': isOpen })}>
//       <div className="dropdown-trigger">
//         <input
//           type="text"
//           placeholder="Enter a part of the name"
//           className="input"
//           data-cy="search-input"
//           value={query}
//           onChange={handleQuery}
//           onFocus={handlerFocus}
//         />
//       </div>

//       <div className="dropdown-menu" role="menu" data-cy="suggestions-list">
//         <div className="dropdown-content">
//           {filteredPeople.map(person => {
//             return (
//               <div
//                 key={person.name}
//                 className="dropdown-item"
//                 data-cy="suggestion-item"
//               >
//                 <p
//                   className={classNames({
//                     'has-text-link': person.sex === 'm',
//                     'has-text-danger': person.sex === 'f',
//                   })}
//                 >
//                   {person.name}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };
