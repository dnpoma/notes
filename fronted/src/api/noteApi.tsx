import { pb } from "../utils/pocketbase";
import { INote, INoteResponse, INotesResponse } from "./types";
import { CreateNoteInput } from "../components/notes/create.note";
import { UpdateNoteInput } from "../components/notes/update.note";

export async function getNotesFn(): Promise<INotesResponse[] | null> {
  try {
    const records = await pb
      .collection("INoteResponse")
      .getFullList<INotesResponse>({
        sort: "-created",
      });
    return records || null;
  } catch (error) {
    throw error;
  }
}

export async function getSingleNoteFn(
  noteId: string
): Promise<INoteResponse | null> {
  try {
    const response = await pb.collection("INoteResponse").getOne(noteId, {
      expand: "relField1,relField2.subRelField",
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getNotes(): Promise<INote[] | null> {
  try {
    const response = await pb
      .collection("INote")
      .getFullList<INote>({});
    return response || null;
  } catch (error) {
    throw error;
  }
}

export async function createNoteFn(
  data: CreateNoteInput
): Promise<INoteResponse | null> {
  try {
    const response = await pb
      .collection("INoteResponse")
      .create<INoteResponse>(data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function updateNoteFn(
  noteId: string,
  note: UpdateNoteInput
): Promise<INoteResponse | null> {
  try {
    const response = await pb
      .collection("INoteResponse")
      .update<INoteResponse>(noteId, note);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteNoteFn(noteId: string) {
  try {
    const response = await pb.collection("INoteResponse").delete(noteId);
    return response;
  } catch (error) {
    throw error;
  }
}
