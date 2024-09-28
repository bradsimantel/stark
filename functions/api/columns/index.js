// List
export async function onRequestGet(context) {
  try {
    const { DB } = context.env;
    const sql = "SELECT * FROM columns ORDER BY created_at DESC";
    const { results } = await DB.prepare(sql).all();

    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Create
export const onRequestPost = async (context) => {
  try {
    const { DB } = context.env;
    const { organizationId, name } = await context.request.json();
    const sql =
      "INSERT INTO columns (organization_id, name) VALUES (?, ?) RETURNING *";
    const column = await DB.prepare(sql).bind(organizationId, name).first();

    return new Response(JSON.stringify(column), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
