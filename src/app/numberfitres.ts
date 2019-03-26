interface ObservationCategory{
    
    CategoryName: string;
    TypeOfCategory: string;
    MinValue?: number;
    MaxValue?: number;
    PosibleValues?: string[];
    FieldLength?: number;
}

interface ConfigParameter{
    SamplingTimeInSeconds: number;
}

interface ObservationAPPparam{
    ConfigParameters: ConfigParameter;
    ObservationCategories: ObservationCategory[];
}

interface Activity{
    ActivityID: string;
    Title: string;
    TypeOfActivity: string;
}

interface Student{
    StudentID: string;
    Label: string;
    Avatar: string;
}

interface Team{
    TeamName: string;
    TeamID: string;
    Color: string;
    Students: Student[];
}

export interface RootObject{
    SessionID: string;
    SessionName: string;
    Topic: string;
    ClassID: string;
    Teams: Team[];
    Activities: Activity[];
    ObservationAPPparams: ObservationAPPparam;
}