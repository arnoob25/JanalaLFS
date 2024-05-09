import baseClient from "@/baseSupabaseClient"

// modified client :
const supabase = baseClient.schema('guided_learning_activity')

// TODO: make the tables and buckets private, and revise the queries

// query functions : 

// fetches the main inquiries from the Supabase database
export async function fetchAllMainInquiries(gla_id) {
    const { data, error } = await supabase
        .from("inquiry")
        .select()
        .is('branch', null)
        .eq('gla', gla_id)

    if (error) throw error;
    return data
}

// fetches the branch inquiries for the branch
export async function fetchAllBranchInquiriesForBranch(branch_id) {
    const { data, error } = await supabase
        .from('inquiry')
        .select()
        .eq('branch', branch_id)
    
    if (error) throw error
    return data
}

// fetched all the media for a given inquiry
export async function fetchAllMedia(inquiry_id) {
    const result_1 = await supabase
        .from('media_asset')
        .select()
        .eq('inquiry', inquiry_id)
        .order('order')

    const result_2 = await supabase
        .from('media_data')
        .select()
        .eq('inquiry', inquiry_id)
        .order('order')

    if (result_1.error) throw result_1.error
    if (result_2.error) throw result_2.error

    const data = [...result_1.data, ...result_2.data]
    data.sort((a, b) => a.order - b.order)

    return data
}

// fetch the video from the storage
export async function fetchVideoUrlFromSource(media_path) {
    // we'll use the baseClient since it has access to the storage
    const { data, error } = baseClient.storage
        .from('guided_learning_activity')
        .getPublicUrl(media_path)

    if (error) throw error
    return data.publicUrl
}

// fetch the choices for an inquiry
export async function fetchChoicesForInquiry(inquiry_id) {
    const { data, error } = await supabase
        .from('choice')
        .select()
        .eq('inquiry', inquiry_id)
        .order('order')

    const correctChoices = data.filter(choice => choice.is_correct === true)

    if (error) throw error
    return { choices: data, correctChoices }
}

// fetch the corresponding branch that maps to the user's selected choice
export async function fetchCorrespondingBranchFromChoice(choice_id) {
    const { data, error } = await supabase
        .from('branch')
        .select()
        .eq('choice', choice_id)

    if (error) throw error
    return data
}

// fetch the open ended question's label for an inquiry
export async function fetchQuestionLabelForInquiry(inquiry_id) {
    const { data, error } = await supabase
        .from('open_ended_question')
        .select()
        .eq('inquiry', inquiry_id)

    if (error) throw error
    return data[0]
}