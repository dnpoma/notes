export type User = {
    id: string;
    username: string;
    email: string;
    avatar?: string;
    created: Date;
    updated: Date;
};

export type LoginFormValues = {
    email: string;
    password: string;
}

export type SignUpFormValues = LoginFormValues & {
    username: string;
  };