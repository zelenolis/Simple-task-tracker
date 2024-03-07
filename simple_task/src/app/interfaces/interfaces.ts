export interface TaskList {
    items: Tasks[]
}

export interface Tasks {
    id: string,
    title: string,
    name: string,
    deadline: string,
    priority: Priorities,
    status: Statuses,
    executor: string
}

export enum Statuses {
    new = "new",
    inProgress = "in progress",
    completed = "completed"
}

export enum Priorities {
    low = "low",
    neutral = "neutral",
    high = "high"
}

export enum SortTypes {
  default = "default",
  status = "status",
  executor = "executor",
  deadline = "deadline",
}
