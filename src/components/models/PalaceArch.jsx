export default function PalaceArch() {
  return (
    <group position={[0, 0, -0.1]}>
      <mesh position={[0, 1.8, 0]}>
        <torusGeometry args={[1.6, 0.08, 8, 24, Math.PI]} />
        <meshStandardMaterial color="#d4af37" metalness={0.85} roughness={0.15} />
      </mesh>
      <mesh position={[-1.5, 0.5, 0]}>
        <boxGeometry args={[0.15, 3, 0.15]} />
        <meshStandardMaterial color="#d4af37" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[1.5, 0.5, 0]}>
        <boxGeometry args={[0.15, 3, 0.15]} />
        <meshStandardMaterial color="#d4af37" metalness={0.7} roughness={0.2} />
      </mesh>
      {[-1.2, -0.6, 0, 0.6, 1.2].map((x, i) => (
        <mesh key={i} position={[x, 2.5, 0.05]}>
          <sphereGeometry args={[0.06, 6, 6]} />
          <meshStandardMaterial color="#e8b4b8" emissive="#e8b4b8" emissiveIntensity={0.2} />
        </mesh>
      ))}
    </group>
  );
}
