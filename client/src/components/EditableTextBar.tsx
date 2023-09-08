import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function EditableTextBar({title = '', onChange = (item: string) => {}}) {
    const [value, setValue] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const handleValueChange = (entry: HTMLInputElement) => {
        setValue((value: string) => value = entry.target.value)
        onChange(value);
    }

    return (
        <>
            {
                isEdit ?
                    <input type='text' onInput={handleValueChange} />
                    :
                    <div>{ title }: { value }</div>
            }
            <FontAwesomeIcon icon={`fa-solid fa-${isEdit ? 'check' : 'pen-to-square'}`} className='cursor-pointer' onClick={() => setIsEdit((isEdit) => isEdit = !isEdit)} />
        </>
    )
}

export default  EditableTextBar;