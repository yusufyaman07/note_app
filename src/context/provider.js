import React, {useState} from 'react';
import MyContext from './index';
import {Alert} from 'react-native';

const Provider = ({children}) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('ikinci sayfa');
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'MVC Patern',
      description:
        'A design engineer is a professional who manages the design and development of various products or systems.',
      date: '19:05',
      read: false,
    },
    {
      id: 2,
      title: 'Native Stack Navigator',
      description:
        'A software engineer is a professional who designs and develops computer programs and systems.',
      date: '19:05',
      read: false,
    },
    {
      id: 3,
      title: 'Bottom Tabs',
      description:
        'A content writer is a professional who creates written materials for various platforms.',
      date: '19:05',
      read: false,
    },
    {
      id: 4,
      title: 'Native Context API',
      description:
        'A Native Developer is a software developer who develops applications customized for a specific operating system.',
      date: '19:05',
      read: false,
    },
  ]);

  const addNote = item => {
    if (item) {
      setNotes([...notes, item]);
      Alert.alert('Note Added');
    }
  };

  const deleteNote = id => {
    if (id) {
      const updatedItems = notes.filter(item => item.id !== id.id);
      setNotes(updatedItems);
      Alert.alert('Note Deleted');
    } else {
      Alert.alert('Note Deleted');
    }
  };

  const updateNote = (id, item) => {
    const updatedItems = notes.map(note =>
      note.id === id
        ? {
            ...note,
            title: item.title,
            description: item.description,
            read: true,
            date: '20:30',
          }
        : note,
    );
    setNotes(updatedItems);
  };

  const changeCount = () => {
    setCount(count + 1);
  };

  const changeText = text => {
    setText(text);
  };

  return (
    <MyContext.Provider
      value={{
        count,
        changeCount,
        text,
        changeText,
        notes,
        setNotes,
        addNote,
        updateNote,
        deleteNote,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
