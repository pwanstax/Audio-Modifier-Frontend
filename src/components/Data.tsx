export default class Data {
  private _file!: File;
  private _id: string;
  private _uploadStatus: string; // ["", "UPLOADING", "DONE", "ERROR"]
  private _chooseSTT: boolean;
  private _chooseVAD: boolean;
  private _processStatusSTT: string; // ["", "PROCESSING", "DONE", "ERROR"]
  private _processStatusVAD: string; // ["", "PROCESSING", "DONE", "ERROR"]
  private _resultSTT!: File;
  private _resultVAD!: File;
  private _errorUpload: string; // error message
  private _errorSTT: string; // error message
  private _errorVAD: string; // error message

  constructor(file: File) {
    this._file = file;
    this._id = "";
    this._uploadStatus = "";
    this._chooseSTT = false;
    this._chooseVAD = false;
    this._processStatusSTT = "";
    this._processStatusVAD = "";
    this._errorUpload = "";
    this._errorSTT = "";
    this._errorVAD = "";
  }

  getFileName() {
    this._file.name.split(".");
    return this._file.name.slice(0, this._file.name.lastIndexOf("."));
  }

  getFileType() {
    return this._file.name.slice(
      this._file.name.lastIndexOf("."),
      this._file.name.length
    );
  }

  getFileSize() {
    if (this._file.size > 1073741824)
      return String(Number(this._file.size / 1073741824).toFixed(2)) + " GB";
    if (this._file.size > 1048576)
      return String(Number(this._file.size / 1048576).toFixed(2)) + " MB";
    if (this._file.size > 1024)
      return String(Number(this._file.size / 1024).toFixed(2)) + " kB";
    return String(Number(this._file.size).toFixed(2)) + " Bytes";
  }

  get file(): File {
    return this._file;
  }

  get id(): string {
    return this._id;
  }

  get chooseSTT(): boolean {
    return this._chooseSTT;
  }

  get chooseVAD(): boolean {
    return this._chooseVAD;
  }

  get uploadStatus(): string {
    return this._uploadStatus;
  }

  get processStatusSTT(): string {
    return this._processStatusSTT;
  }

  get processStatusVAD(): string {
    return this._processStatusVAD;
  }

  get resultSTT(): any {
    return this._resultSTT;
  }

  get resultVAD(): any {
    return this._resultVAD;
  }

  get errorUpload(): string {
    return this._errorSTT;
  }

  get errorSTT(): string {
    return this._errorSTT;
  }

  get errorVAD(): string {
    return this._errorVAD;
  }

  //////////////////////////////////////////

  set id(id: string) {
    this._id = id;
  }

  set chooseSTT(check: boolean) {
    this._chooseSTT = check;
  }

  set chooseVAD(check: boolean) {
    this._chooseVAD = check;
  }

  set uploadStatus(newStatus: string) {
    this._uploadStatus = newStatus;
  }

  set processStatusSTT(status: string) {
    this._processStatusSTT = status;
  }

  set processStatusVAD(status: string) {
    this._processStatusVAD = status;
  }

  set resultSTT(result: any) {
    this._resultSTT = result;
  }

  set resultVAD(result: any) {
    this._resultVAD = result;
  }

  set errorUpload(error: string) {
    this._errorUpload = error;
  }

  set errorSTT(error: string) {
    this._errorSTT = error;
  }

  set errorVAD(error: string) {
    this._errorVAD = error;
  }
}
