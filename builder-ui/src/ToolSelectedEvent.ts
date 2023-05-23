import { ToolElement } from "./ToolBarElement";

/**
 * ToolSelectedEvent class defines toolType as enum ToolElemnt
 */
export class ToolSelectedEvent  {
  toolType: ToolElement;
  elementDropped = false;

  constructor() { }
}
