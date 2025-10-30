import { ErrorCode } from 'react-dropzone';

class DropFileMessage {
	unknown() {
		return 'неизвестная ошибка';
	}

	invalidType() {
		return 'неподдерживаемый тип файла';
	}

	tooLarge() {
		return 'слишком большой размер файла';
	}

	tooSmall() {
		return 'слишком маленький размер файла';
	}

	tooManyFiles() {
		return 'слишком много файлов';
	}

	private errorMap = {
		[ErrorCode.FileInvalidType]: this.invalidType(),
		[ErrorCode.FileTooLarge]: this.tooLarge(),
		[ErrorCode.FileTooSmall]: this.tooSmall(),
		[ErrorCode.TooManyFiles]: this.tooManyFiles()
	};

	getByError(error: ErrorCode | string) {
		// @ts-ignore
		return this.errorMap[error] ?? this.unknown();
	}
}

export const dropFileMessage = new DropFileMessage();
