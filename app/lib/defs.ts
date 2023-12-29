export enum ProblemTag {
    PHYSICS                     = "physics",
    THERMAL_PHYSICS             = "physics-thermal",
    ACOUSTICS_PHYSICS           = "physics-acoustics",
    COSMOLOGY_PHYSICS           = "physics-cosmology",
    EXPERIMENTAL_PHYSICS        = "physics-experimental",
    CONDENSED_MATTER_PHYSICS    = "physics-condensed-matter",
    FLUID_PHYSICS               = "physics-fluids",
    ELECTROMAGNETISM_PHYSICS    = "physics-electromagnetism",
    OPTICS_PHYSICS              = "physics-optics",
    ATOMIC_PHYSICS              = "physics-atomic",
    PARTICLE_PHYSICS            = "physics-particle",
    NUCLEAR_PHYSICS             = "physics-nuclear",
    CLASSICAL_PHYSICS           = "physics-classical",
    QUANTUMN_PHYSICS            = "physics-quantumn",
    RELATIVITY_PHYSICS          = "physics-relativity",
    OTHER                       = "other",
    NONE                        = "none",
};


export interface Problem {
    id?: string,
    title: string, // meta
    question_html: string,
    answer_html: string,
    tags?: ProblemTag[]
};
