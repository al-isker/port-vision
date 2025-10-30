import { getWordByNumber } from '@/shared/utils/views/word-by-number';

class ValidationMessage {
	required() {
		return 'Обязательное поле';
	}

	format() {
		return 'Неверный формат';
	}

	min(number: number) {
		return `Число должно быть больше или равно ${number}`;
	}

	max(number: number) {
		return `Число должно быть меньше или равно ${number}`;
	}

	minLength(number: number) {
		return `Значение должно быть ${number} или более символов`;
	}

	maxLength(number: number) {
		return `Значение должно быть ${number} или менее символов`;
	}

	length(...number: number[]) {
		return `Значение должно быть длинной ${number.join(' или ')} символов`;
	}

	listMinLength(number: number) {
		return `Список должен включать более ${number} ${getWordByNumber(number, ['элемента', 'элементов', 'элементов'])}`;
	}

	listMaxLength(number: number) {
		return `Список должен включать менее ${number} ${getWordByNumber(number, ['элемента', 'элементов', 'элементов'])}`;
	}

	listLength(number: number) {
		return `Список должен включать ${number} ${getWordByNumber(number, ['элемент', 'элемента', 'элементов'])}`;
	}
}

export const validationMessage = new ValidationMessage();
