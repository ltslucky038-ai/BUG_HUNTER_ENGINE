const BugTable = ({ bugs }) => {
  return (
    <table className="w-full border mt-4">
      <thead className="bg-gray-200">
        <tr>
          <th className="border p-2">Type</th>
          <th className="border p-2">Severity</th>
          <th className="border p-2">File</th>
          <th className="border p-2">Line</th>
          <th className="border p-2">Fix</th>
        </tr>
      </thead>
      <tbody>
        {bugs.map((bug) => (
          <tr key={bug.id}>
            <td className="border p-2">{bug.type}</td>
            <td className="border p-2">{bug.severity}</td>
            <td className="border p-2">{bug.file}</td>
            <td className="border p-2">{bug.line}</td>
            <td className="border p-2">{bug.fix}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BugTable;
